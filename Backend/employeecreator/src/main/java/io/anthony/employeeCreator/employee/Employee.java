package io.anthony.employeeCreator.employee;


import io.anthony.employeeCreator.contract.Contract;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="employees")

public class Employee {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Getter
	private Long id;
	
	@Column
	@Getter
	@Setter
	private String firstName;
	
	@Column
	@Getter
	@Setter
	private String middleName;
	
	@Column
	@Getter
	@Setter
	private String lastName;
	
	@Column
	@Getter
	@Setter
	private String email;
	
	@Column
	@Getter
	@Setter
	private String mobile;
	
	@Column
	@Getter
	@Setter
	private String address;
	
	@Getter
	@Setter
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="contract_id", referencedColumnName="id")
	private Contract contract;
	
	public Employee() {}
	
	public Employee(Long id, String firstName, String middleName, String lastName, String email, String mobile, String address) {
		this.id =id;
		this.firstName=firstName;
		this.middleName=middleName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.address = address;
		
		
	}

}
