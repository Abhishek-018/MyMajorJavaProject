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

import com.cybage.exception.EventNotFoundException;
import com.cybage.model.Category;
import com.cybage.model.Event;
import com.cybage.service.EventService;

@CrossOrigin("*")
@RestController
@RequestMapping("/event")
public class EventController {
	
	@Autowired
	private EventService eventService;
	
	
	@PostMapping("/")
	public ResponseEntity<String> addEvent(@RequestBody Event event)
	{
		Event event1 = eventService.addEvent(event);
		return new ResponseEntity<String>("Record added sucessfully",HttpStatus.CREATED);
	}
	
	
	@GetMapping("/")
	public ResponseEntity<List<Event>> getAllEvents()
	{
		
		List<Event> eventList=eventService.getAllEvents();
		return new ResponseEntity <List<Event>> (eventService.getAllEvents(),HttpStatus.OK);
	}
	
	//Get Category By Id:
	@GetMapping("/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable int id)
	{
		Event event1 = eventService.getEventById(id);
//		return new ResponseEntity<Event>(event1,HttpStatus.OK);
		if (event1 == null)
            throw new EventNotFoundException("Event not found");
        return new ResponseEntity<Event>(eventService.getEventById(id), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateEvent(@PathVariable int id,@RequestBody Event event) //
	   { 
		eventService.updateEvent(id,event); 
		return new ResponseEntity<String>("Event updated Successfully", HttpStatus.OK); 
	 }
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteEvent(@PathVariable int id) {

		eventService.deleteEventById(id);
		return new ResponseEntity<String>("Event deleted Successfully", HttpStatus.OK);
	}
	
	
	
	
	//Sorting By Price:
	@GetMapping("/price")
	public ResponseEntity<List<Event>> getAllEventByPrice()
	{
		List<Event> productList = eventService.getAllEventByPrice();
		return new ResponseEntity<List<Event>>(productList,HttpStatus.OK);
	}
	
	//To Get Event According to the Id:
	@GetMapping("/getEventsById/{id}")
	public ResponseEntity<List<Event>> getByOrganizer(@PathVariable int id)
	{
		List<Event> eventList = eventService.getEventOrganizerId(id);
		return new ResponseEntity<List<Event>>(eventList, HttpStatus.OK);
	}
	

}
