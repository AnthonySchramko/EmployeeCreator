package io.anthony.employeeCreator.contract;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ContractUpdateDTO {
	private boolean contractType;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate startDate;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate endDate;
	
	private boolean ongoing;
	
	private boolean fullTime;
	
	private int hours;
	
}
