package com.cybage.service;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cybage.model.Registrationdemo;
import com.cybage.repository.RegistrationRepository;

import net.bytebuddy.utility.RandomString;

@Service
public class RegistrationService {

	@Autowired
	RegistrationRepository registrationRepository;
	Logger logger = LogManager.getLogger(RegistrationService.class);

	@Autowired
	private JavaMailSender mailSender;

	public void registerUser(Registrationdemo registrationdemo, String siteURL)
			{
		

		String randomCode = RandomString.make(15);
		registrationdemo.setVerifiedCode(randomCode);
		registrationdemo.setAuthorize(false);
		
			logger.info("User Registered Sucessfully");
		 registrationRepository.save(registrationdemo);

		 try {
			sendVerificationEmail(registrationdemo, siteURL);
		} catch (UnsupportedEncodingException | MessagingException e) {

			logger.warn(e.getMessage());
			e.printStackTrace();
		
		}
	}

	private void sendVerificationEmail(Registrationdemo registrationdemo, String siteURL)
			throws MessagingException, UnsupportedEncodingException {
		String toAddress = registrationdemo.getEmail();
		String fromAddress = "Trng2@evolvingsols.com";
		String senderName = "Book My Event";
		String subject = "Please Click on this Link to Activate your Account";

		String content = "<p> Dear " + registrationdemo.getFirstName() + " " + registrationdemo.getLastName() + ",</p>";


		String verifyURL = siteURL + "/registration/verify?code=" + registrationdemo.getVerifiedCode();
		
		content += "<h4> <a href=\"" + verifyURL + "\">click here to activate your account</a></h4>";
		content += "<p> Thank you <br> Event Management</p>";

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom(fromAddress, senderName);
		helper.setTo(toAddress);
		helper.setSubject(subject);

		helper.setText(content, true);
		logger.info("Mail send sucessfully");
		mailSender.send(message);

	}

	public boolean verify(String verifiedCode) {
		
		Registrationdemo registrationdemo = registrationRepository.findByVerifiedCode(verifiedCode);
		

		if (registrationdemo == null || registrationdemo.isAuthorize()) {
			return false;
		} 
		else 
		{

			registrationdemo.setAuthorize(true);
			registrationdemo.setVerifiedCode("Your account is verified!!");
			registrationRepository.save(registrationdemo);
			return true;
		}
	}
	
	//To get the List of registered members:
	public List<Registrationdemo> getAllRegisteredUser() {
		
		logger.info("All registered user fetched successfully.");
		return registrationRepository.findAll();
	}
	
	//To get the list of registered member by role:
	public List<Registrationdemo> getAllRegisteredUserByRole() {
		
		return registrationRepository.findAll();
	}
	
	//To get the member using registeredId:
	public Registrationdemo getRegisteredUserById(int registeredId)
	{
		return registrationRepository.findById(registeredId).orElse(null);
	}
	
	//Delete method:
	public void deleteRegisteredUser(int registeredId)
	{
		registrationRepository.deleteById(registeredId);
	}
	
	//Update method:
	public Registrationdemo updateRegisteredUser(int id,Registrationdemo registrationdemo)
	{
		Registrationdemo registrationdemo1=registrationRepository.findById(id).get();
		
		if(registrationdemo.getFirstName()!=null)
			registrationdemo1.setFirstName(registrationdemo.getFirstName());
		
		if(registrationdemo.getLastName()!=null)
			registrationdemo1.setLastName(registrationdemo.getLastName());
		
		if(registrationdemo.getContactNumber()!=null)
			registrationdemo1.setContactNumber(registrationdemo.getContactNumber());
		
		
		if(registrationdemo.getPassword()!=null)
			registrationdemo1.setPassword(registrationdemo.getPassword());
		
		
		logger.info("Registered User Updated successfully");
		return 	registrationRepository.save(registrationdemo1);
	}
	
	//To get the list of Organizers:
	public List<Registrationdemo> getOrganizer()
	{
		return registrationRepository.getOrganizer();
	}
	
	//To get the list of Users:
	public List<Registrationdemo> getUser()
	{
		return registrationRepository.getUser();
	}
	
	

	
}
