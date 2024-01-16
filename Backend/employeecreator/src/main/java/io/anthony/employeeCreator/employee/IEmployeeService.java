package io.anthony.employeeCreator.employee;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import org.modelmapper.ModelMapper;
import org.modelmapper.internal.util.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exceptions.ValidationException;
import io.anthony.employeeCreator.contract.Contract;
import io.anthony.employeeCreator.contract.ContractCreateDTO;
import io.anthony.employeeCreator.contract.ContractRepository;
import io.anthony.employeeCreator.contract.ContractUpdateDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class IEmployeeService implements EmployeeService {
	
	private static final Pattern MOBILE_PATTERN = Pattern.compile("\\d{10}");
    private static final Pattern EMAIL_PATTERN = Pattern.compile("\\S+@\\S+\\.\\S+");
	
	@Autowired private EmployeeRepository employeeRepository;
	
	@Autowired private ContractRepository contractRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public List<Employee> getAll(){
		return this.employeeRepository.findAll();
	}
	@Override
	public Optional<Employee> getById(long id){
		return this.employeeRepository.findById(id);
	}
	
	@Override
	public Employee createEmployee(EmployeeCreateDTO employeeDTO, ContractCreateDTO contractDTO) {
		Employee newEmployee = modelMapper.map(employeeDTO, Employee.class);
		Contract newContract = modelMapper.map(contractDTO, Contract.class);
		validateContract(newContract);
		validateEmployee(newEmployee);
		newEmployee.setContract(newContract);
		newContract.setEmployee(newEmployee);
		Employee created = this.employeeRepository.save(newEmployee);
		
		
		return created;
	}
	@Override
	public boolean deleteById(long id) {
		Optional<Employee> foundEmployee = this.employeeRepository.findById(id);
		if(foundEmployee.isPresent()) {
			this.employeeRepository.delete(foundEmployee.get());
			return true;
		}
		return false;
	}
	@Override
	public Optional<Employee> updateById(long id, EmployeeUpdateDTO employeeDTO, ContractUpdateDTO contractDTO){
		Optional<Employee> foundEmployee = this.getById(id);
		Assert.notNull(employeeDTO, "EmployeeCreateDTO must not be null");
	    Assert.notNull(contractDTO, "ContractCreateDTO must not be null");
		
		if(foundEmployee.isPresent()) {
			Employee toUpdate = foundEmployee.get();
			modelMapper.map(employeeDTO, toUpdate);
			Contract contract = toUpdate.getContract();
			modelMapper.map(contractDTO, contract);
			validateContract(contract);
			validateEmployee(toUpdate);
			contractRepository.save(contract);
			Employee updatedEmployee = this.employeeRepository.save(toUpdate);
			return Optional.of(updatedEmployee);
		}
		return foundEmployee;
	}
	
	private boolean validateContract(Contract contract) {
	    LocalDate startDate = contract.getStartDate();
	    LocalDate endDate = contract.getEndDate();

	    if (startDate != null && endDate != null && startDate.isAfter(endDate)) {
	        throw new ValidationException("Start date must be before end date");
	    }
	    return true;
	}
	private boolean validateEmployee(Employee employee) {
		String mobile = employee.getMobile();
		String email = employee.getEmail();
		if(mobile !=null && !MOBILE_PATTERN.matcher(mobile).matches()) {
			throw new ValidationException("Invalid mobile number (must be 10 digits)");
		}
		if(email != null && !EMAIL_PATTERN.matcher(email).matches()) {
			throw new ValidationException("Invalid email address");
		}
		return true;
	}
}
