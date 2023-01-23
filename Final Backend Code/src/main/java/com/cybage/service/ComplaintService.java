package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Complaint;
import com.cybage.model.Event;
import com.cybage.repository.ComplaintRepository;
import com.cybage.repository.EventRepository;

@Service
public class ComplaintService {
	
	@Autowired
	private ComplaintRepository complaintRepository;
	
	//To Add a Complaint:
	public Complaint addComplaint(Complaint complaint)
	{
		return complaintRepository.save(complaint);	
	}
	
	//To Get All the complaints:
	public List<Complaint> getAllComplaint()
	{
		return complaintRepository.findAll();
	}
	
	//To get the complaintById:
	public Complaint getComplaintById(int id)
	{
		
		return complaintRepository.findById(id).orElse(null);
	}
	
	
	//To delete a particular complaint:
	public void deleteComplaintById(int id)
	{
		complaintRepository.deleteById(id);	
	}
	
	
	public Complaint updateComplaint(int id, Complaint complaint) {
		 
		Complaint complaint1 = complaintRepository.findById(id).get();
		if(complaint.getComplaintDescription()!=null)
			complaint1.setComplaintDescription(complaint.getComplaintDescription());
		if(complaint.getApproval()!=null)
			complaint1.setApproval(complaint.getApproval());
	  return complaintRepository.save(complaint1); 
	  
	}

}
