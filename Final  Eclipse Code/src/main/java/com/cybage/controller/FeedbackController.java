package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.model.Feedback;
import com.cybage.service.FeedbackService;

@CrossOrigin("*")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;
	
	@PostMapping("/")
	public ResponseEntity<String> addFeedback(@RequestBody Feedback feedback)
	{
		Feedback feedback1 = feedbackService.addFeedback(feedback);
		return new ResponseEntity<String>("Feedback Added Successfully", HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<Feedback>>  getFeedBack()
	{
		List<Feedback> feedBackList = feedbackService.getFeedback();
		return new ResponseEntity<List<Feedback>>(feedBackList,HttpStatus.OK);
	}
	
	

}
