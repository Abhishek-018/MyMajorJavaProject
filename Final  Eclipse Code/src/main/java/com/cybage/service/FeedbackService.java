package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Feedback;
import com.cybage.repository.FeedbackRepository;

@Service
public class FeedbackService {
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	//Can Add Feedback:
	public Feedback addFeedback(Feedback feedback)
	{
		return feedbackRepository.save(feedback);
	}
	
	//To get the List of Feedback:
	public List<Feedback> getFeedback()
	{
		return feedbackRepository.findAll();
	}
	
	//To get the Feedback according to the Id:
	public Feedback getFeedBackById(int id)
	{
		return feedbackRepository.findById(id).orElse(null);
		
	}

	
	
}
