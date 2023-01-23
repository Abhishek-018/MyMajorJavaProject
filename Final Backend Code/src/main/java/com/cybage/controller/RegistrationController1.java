package com.cybage.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.model.Registrationdemo;
import com.cybage.repository.RegistrationRepository;
import com.cybage.service.RegistrationService;

@CrossOrigin("*")
@RestController
@RequestMapping("/registration")
public class RegistrationController1 {
	
	
@Autowired RegistrationRepository registrationRepository;
	
	@Autowired RegistrationService registrationService;
	
	
	@PostMapping("/registerUser")
	public void registerUser(@RequestBody Registrationdemo registration,HttpServletRequest request) throws UnsupportedEncodingException, MessagingException
	{
		registrationService.registerUser(registration,getSiteURL(request));
	}
	
	private String getSiteURL(HttpServletRequest request) {
		String siteURL = request.getRequestURL().toString();
		return siteURL.replace(request.getServletPath(), "");
	}
	
	@GetMapping("/getAllRegisteredUser")
	public ResponseEntity<List<Registrationdemo>> getAllRegisteredUser()
	{
		List<Registrationdemo> list =registrationService.getAllRegisteredUser();
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@GetMapping("/getRegisteredUserById/{id}")
	public ResponseEntity<Registrationdemo> getRegisteredUserById(@PathVariable int id)
	{
		Registrationdemo registrationdemo = registrationService.getRegisteredUserById(id);
		return new ResponseEntity<>(registrationdemo,HttpStatus.OK);
	} 
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteRegisteredUser(@PathVariable int id)
	{
		registrationService.deleteRegisteredUser(id);
		return new ResponseEntity<>("User Deleted Successfully!",HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateRegisteredUser(@PathVariable int id,@RequestBody Registrationdemo registrationdemo)
	{
		registrationService.updateRegisteredUser(id, registrationdemo);
		return new ResponseEntity<>("user values updated Successfully!!!",HttpStatus.CREATED);
	}
	
	
	
	
	@GetMapping("/verify")
	public ResponseEntity<String> activateAccount(@Param("code") String code)
	{
		boolean isAccountVerified = registrationService.verify(code);
		if(isAccountVerified)
		{
			return new ResponseEntity<>("Your account is verified",HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>("Error in verification",HttpStatus.OK);
		}
	}
	
	@GetMapping("/getAllRegisteredUserByRole")
	public ResponseEntity<List<Registrationdemo>> getAllRegisteredUserByRole()
	{
		List<Registrationdemo> list =registrationService.getAllRegisteredUserByRole();
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
//	@GetMapping("/getRegisterUserByEmail/{email}")
//	public ResponseEntity<Registrationdemo> getUserByEmail(@PathVariable String email)
//	{
//		Registrationdemo registerList = registrationService.getUserByEmail(email);
//		return new ResponseEntity<Registrationdemo>(registerList,HttpStatus.OK);
//	}
	
	
	@GetMapping("/getByOrganizer")
	public ResponseEntity<List<Registrationdemo>> getOrganizer()
	{
		List<Registrationdemo> registrationdemo1 = registrationService.getOrganizer();
		return new ResponseEntity<List<Registrationdemo>>(registrationdemo1, HttpStatus.OK);
	}
	
	@GetMapping("/getByUser")
	public ResponseEntity<List<Registrationdemo>> getUser()
	{
		List<Registrationdemo> registrationdemo2 = registrationService.getUser();
		return new ResponseEntity<List<Registrationdemo>>(registrationdemo2, HttpStatus.OK);
	}

}
