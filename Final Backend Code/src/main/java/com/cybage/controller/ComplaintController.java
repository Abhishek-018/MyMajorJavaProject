package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.cybage.model.Complaint;
import com.cybage.model.Event;
import com.cybage.service.ComplaintService;
import com.cybage.service.EventService;

@CrossOrigin("*")
@RequestMapping("/complaint")
@RestController
public class ComplaintController {
	
	@Autowired
	private ComplaintService complaintService;
	
	
	@PostMapping("/")
	public ResponseEntity<String> addComplaint(@RequestBody Complaint complaint)
	{
		Complaint complaint1 = complaintService.addComplaint(complaint);
		return new ResponseEntity<String>("Record added sucessfully",HttpStatus.CREATED);
	}
	
	
	@GetMapping("/")
	public ResponseEntity<List<Complaint>> getAllComplaints()
	{
		
		List<Complaint> complaintList= complaintService.getAllComplaint();
		return new ResponseEntity <List<Complaint>> (complaintService.getAllComplaint(),HttpStatus.OK);
	}
	
	//Get Category By Id:
	@GetMapping("/{id}")
	public ResponseEntity<Complaint> getComplaintById(@PathVariable int id)
	{
		Complaint complaint1 = complaintService.getComplaintById(id);
		return new ResponseEntity<Complaint>(complaint1,HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateComplaint(@PathVariable int id,@RequestBody Complaint complaint) //
	   { 
		complaintService.updateComplaint(id, complaint); 
		return new ResponseEntity<String>("Complaint updated Successfully", HttpStatus.OK); 
	 }
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteComplaint(@PathVariable int id) {

		complaintService.deleteComplaintById(id);
		return new ResponseEntity<String>("Complaint deleted Successfully", HttpStatus.OK);
	}
	
	
	
	
	

}
