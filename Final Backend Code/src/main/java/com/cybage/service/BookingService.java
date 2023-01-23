package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Booking;
import com.cybage.model.Event;
import com.cybage.repository.BookingRepository;

@Service
public class BookingService {
	
	
	@Autowired
	private BookingRepository bookingRepository;
	
	//Can Book Event:
	public Booking addBooking(Booking booking)
	{
		return bookingRepository.save(booking);
	}
	
	//To get the List of Booking:
	public List<Booking> getBooking()
	{
		return bookingRepository.findAll();
	}
	
	//To get the Booking according to the Id:
	public Booking getBookingById(int id)
	{
		return bookingRepository.findById(id).orElse(null);
	
	}
	
	//To delete a particular Booking:
	public void deleteBooking(int id)
	{
		bookingRepository.deleteById(id);
	}
	
	//To update a particular booking:
	public Booking updatebooking(int id, Booking booking) {
		 
		Booking booking1 = bookingRepository.findById(id).get();
		if(booking.getStatus()!=null)
			booking1.setStatus(booking.getStatus());
		
	  return bookingRepository.save(booking1); 
	  
	}
	
	

	public List<Booking> getBookingUserId(int id)
	{
		return bookingRepository.getBookingByUserId(id);
	}
	
	
	public List<Booking> getBookingOrganizerId(int id)
	{
		return bookingRepository.getBookingByOrganizerId(id);
	}


}
