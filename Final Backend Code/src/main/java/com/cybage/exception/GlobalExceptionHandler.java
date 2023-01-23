package com.cybage.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class GlobalExceptionHandler {
	
	@ExceptionHandler(EventNotFoundException.class)
    public ResponseEntity<String> handleException(EventNotFoundException exception) {
        return new ResponseEntity<String>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(EventCategoryNotFoundException.class)
    public ResponseEntity<String> handleException(EventCategoryNotFoundException exception) {
        return new ResponseEntity<String>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(InvalidInputException.class)
    public ResponseEntity<String> InvalidInputException(InvalidInputException exception) {
        return new ResponseEntity<String>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

}
