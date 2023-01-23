package com.cybage.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.exception.InvalidInputException;
import com.cybage.model.Registrationdemo;
import com.cybage.repository.RegistrationRepository;
import com.cybage.service.LoginService;

@CrossOrigin("*")
@RequestMapping("/login")
@RestController
public class LoginController {
	
	
	@Autowired 
	private RegistrationRepository registrationRepository;
	
	@Autowired
	private LoginService loginService;
	
	
	@PostMapping("/")
    public ResponseEntity<Registrationdemo> login(@RequestBody  Registrationdemo registrationdemo, 
                                                                    HttpServletRequest request){
          
          String email = registrationdemo.getEmail();
          String password = registrationdemo.getPassword();
          
          Registrationdemo loggedInUser = loginService.loginAuthentication(email, password);
          
          boolean verifyUserEmail = loginService.checkByEmail(email);
          boolean checkPassword = loginService.checkPassword(registrationdemo);
          
          if (!verifyUserEmail) {
               throw new InvalidInputException("User does not exists..."); 
          }
          else if(verifyUserEmail) {
               if(checkPassword) {
            	   

                    if(!loggedInUser.getAuthorize()) {
                          throw new InvalidInputException("User is not verified...");
                    }
                    else if(loggedInUser.getAuthorize()) {
                          //login successful
                          
//                         loginService.updateLoginAttempts(loggedInUser.getRegistrationId(), loggedInUser.getLoginAttempt());
                          
                          HttpSession session = request.getSession();
                          
                          session.setAttribute("registrationId", loggedInUser.getRegistrationId());
                          session.setAttribute("email", loggedInUser.getEmail());
                          session.setAttribute("firstname", loggedInUser.getFirstName());
                          session.setAttribute("lastname", loggedInUser.getLastName());
                          session.setAttribute("role", loggedInUser.getRole());
                          session.setAttribute("contactNumber", loggedInUser.getContactNumber());
                          
                    }
               }
               else {
                    throw new InvalidInputException("Incorrect credentials ...");
               }                          
          }
          
          return new ResponseEntity<Registrationdemo>(loggedInUser, HttpStatus.OK);            
    }    


}
