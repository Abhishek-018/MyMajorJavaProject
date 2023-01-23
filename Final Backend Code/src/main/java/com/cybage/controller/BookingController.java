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

import com.cybage.model.Booking;
import com.cybage.model.Event;
import com.cybage.service.BookingService;
@CrossOrigin("*")
@RequestMapping("/booking")
@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	//Add Booking to the Booking Table: 
	@PostMapping("/")
	public ResponseEntity<String> addBooking(@RequestBody Booking booking)
	{
		Booking booking1 = bookingService.addBooking(booking);
		return new ResponseEntity<String>("Booking Added Successfully!",HttpStatus.CREATED);
	}
	
	//Get the List of Booking:
	@GetMapping("/")
	public ResponseEntity<List<Booking>> getBooking()
	{
		List<Booking> bookingList = bookingService.getBooking();
		return new ResponseEntity<List<Booking>>(bookingList,HttpStatus.OK);
	}
	
	//Get Booking By Id:
	@GetMapping("/{id}")
	public ResponseEntity<Booking> getBooking(@PathVariable int id)
	{
		Booking booking1 = bookingService.getBookingById(id);
		return new ResponseEntity<Booking>(booking1,HttpStatus.OK);
	}
	
	
	//Update Booking:
	@PutMapping("/{id}")
	public ResponseEntity<String> updateBooking(@PathVariable int id, @RequestBody Booking booking)
	{
		bookingService.updatebooking(id, booking);
		return new ResponseEntity<String>("Booking Status Updated Successfully",HttpStatus.CREATED);
	}
	

	@GetMapping("/getBookingById/{id}")
	public ResponseEntity<List<Booking>> getByBookingId(@PathVariable int id)
	{
		List<Booking> bookingList = bookingService.getBookingUserId(id);
		return new ResponseEntity<List<Booking>>(bookingList, HttpStatus.OK);
	}
	
	@GetMapping("/getOrganizerBookingById/{id}")
	public ResponseEntity<List<Booking>> getOrganizerByBookingId(@PathVariable int id)
	{
		List<Booking> bookingOrganizerList = bookingService.getBookingOrganizerId(id);
		return new ResponseEntity<List<Booking>>(bookingOrganizerList, HttpStatus.OK);
	}
	

}
