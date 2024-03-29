package exceptions;

public class ValidationException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	private String message;
	
    public ValidationException(String message) {
        super();
        this.message = message;
    }
    
    public String getMessage() {
		return this.message;
	}
    
}
