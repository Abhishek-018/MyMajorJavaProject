package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.cybage.model.Event;
import com.cybage.repository.EventRepository;

@Service
public class EventService {

	@Autowired
	private EventRepository eventRepository;

	// To Add a Event:
	public Event addEvent(Event event) {
		return eventRepository.save(event);
	}

	// To Get All the events:
	public List<Event> getAllEvents() {
		return eventRepository.findAll();
	}

	// To get the eventById:
	public Event getEventById(int id) {

		return eventRepository.findById(id).orElse(null);
	}

	// To delete a particular event:
	public void deleteEventById(int id) {
		eventRepository.deleteById(id);
	}

	public Event updateEvent(int id, Event event) {

		Event event1 = eventRepository.findById(id).get();
		if (event.getEventName() != null)
			event1.setEventName(event.getEventName());
		if (event.getEventPrice() != 0)
			event1.setEventPrice(event.getEventPrice());
		if (event.getEventLocation() != null)
			event1.setEventLocation(event.getEventLocation());
		if (event.getEventDate() != null)
			event1.setEventDate(event.getEventDate());
		if (event.getEventDetails() != null)
			event1.setEventDetails(event.getEventDetails());
		return eventRepository.save(event1);

	}

	public List<Event> getAllEventByPrice() {
		// for returning list in descending order of productId
		return eventRepository.findAll(Sort.by(Direction.DESC, "eventPrice"));
	}


	
	// To display events according to the organizer id:
	public List<Event> getEventOrganizerId(int id)
	{
		return eventRepository.getByOrganizerId(id);
	}

}
