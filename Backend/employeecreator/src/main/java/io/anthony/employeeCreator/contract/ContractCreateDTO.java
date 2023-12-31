package io.anthony.employeeCreator.contract;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ContractCreateDTO {
	private String contractType;
	
	@NotNull(message = "Must have a start date")
    @DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate startDate;
	
	@NotNull(message = "Must have a start date")
    @DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate endDate;
	
	private String ongoing;
	
	private String fullTime;
	
	@NotNull(message = "Hours cannot be blank")
	private int hours;
}
