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
import org.springframework.web.client.RestTemplate;

import com.cybage.model.Feedback;

@CrossOrigin("*")
@RequestMapping("/feedbackems")
@RestController
public class FeedbackController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	private String baseUrl = "http://localhost:8081/feedback";
	
	@PostMapping("/addFeedback")
	public ResponseEntity<String> addFeedback(@RequestBody Feedback feedback)
	{
		return restTemplate.postForEntity(baseUrl+"/", feedback, String.class);
	}
	
	@GetMapping("/getAllFeedbacks")
	public ResponseEntity<Feedback[]>  getFeedBack()
	{
		return restTemplate.getForEntity(baseUrl+"/", Feedback[].class);
	}
	

}
