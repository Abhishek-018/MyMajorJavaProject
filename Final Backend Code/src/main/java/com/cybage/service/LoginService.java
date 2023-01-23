package com.cybage.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Registrationdemo;
import com.cybage.repository.LoginRepository;
import com.cybage.repository.RegistrationRepository;

@Service
public class LoginService {
	
	
	@Autowired
	LoginRepository loginRepository;
	
	//getting user by username
    public Registrationdemo getByEmail(String email) {
          return loginRepository.findByEmail(email);
    }
    
    //check if user exists by given username 
    public boolean checkByEmail(String email) {
          Registrationdemo userDetails = loginRepository.findByEmail(email);
          
          if(userDetails != null) {
               return true;
          }
          else {
               return false;
          }
    }
    
    //check if given password by login is same for the username
    public boolean checkPassword(Registrationdemo registrationdemo) {
          
//        check if username exists
          boolean flag = checkByEmail(registrationdemo.getEmail());
          
//        if yes
          if(flag) {
               return getByEmail(registrationdemo.getEmail()).getPassword().equals(registrationdemo.getPassword());
          }
          
          else {
               return false;
          }    
          
          }
    
    public Registrationdemo loginAuthentication(String email, String password) {
          return loginRepository.getDataForAuthentication(email, password);
    }

    

    
    
               
    //generate otp for login
    public static Integer generateOTP() {
          Random random = new Random();
       int num = random.nextInt(100000);
       String formatted = String.format("%05d", num);
       return Integer.parseInt(formatted);


    }
}