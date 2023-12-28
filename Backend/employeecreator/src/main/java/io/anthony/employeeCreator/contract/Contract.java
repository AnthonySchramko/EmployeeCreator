package io.anthony.employeeCreator.contract;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.anthony.employeeCreator.employee.Employee;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "contracts")
@JsonIgnoreProperties({"employee"})
public class Contract {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column
	@Getter
	@Setter
	private boolean contractType;
	
	@Column
	@Getter
	@Setter
	private LocalDate startDate;
	
	@Column
	@Getter
	@Setter
	private LocalDate endDate;
	
	@Column
	@Getter
	@Setter
	private boolean ongoing;
	
	@Column
	@Getter
	@Setter
	private boolean fullTime;
	
	@Column
	@Getter
	@Setter
	private int hours;
	
	@Getter
	@Setter
	@OneToOne(mappedBy = "contract")
	private Employee employee;
	
	public Contract() {}
	
	public Contract(Long id, boolean contractType, LocalDate startDate, LocalDate endDate, boolean ongoing, boolean fullTime, int hours) {
		this.id = id;
		this.contractType = contractType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.ongoing = ongoing;
		this.fullTime = fullTime;
		this.hours = hours;
	}
}
