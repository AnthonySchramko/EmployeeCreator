package io.anthony.employeeCreator.employee;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	
	@Autowired private EmployeeRepository employeeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public List<Employee> getAll(){
		return this.employeeRepository.findAll();
	}
	
	public Optional<Employee> getById(Long id){
		return this.employeeRepository.findById(id);
	}
	
	public Employee createEmployee(EmployeeCreateDTO data) {
		Employee newEmployee = modelMapper.map(data, Employee.class);
		Employee created = this.employeeRepository.save(newEmployee);
		
		return created;
	}
	public boolean deleteById(Long id) {
		Optional<Employee> foundEmployee = this.employeeRepository.findById(id);
		if(foundEmployee.isPresent()) {
			this.employeeRepository.delete(foundEmployee.get());
			return true;
		}
		return false;
	}
	public Optional<Employee> updateById(long id, EmployeeUpdateDTO data){
		Optional<Employee> foundEmployee = this.getById(id);
		
		if(foundEmployee.isPresent()) {
			Employee toUpdate = foundEmployee.get();
			modelMapper.map(data, toUpdate);
			Employee updatedEmployee = this.employeeRepository.save(toUpdate);
			return Optional.of(updatedEmployee);
		}
		return foundEmployee;
	}

}
