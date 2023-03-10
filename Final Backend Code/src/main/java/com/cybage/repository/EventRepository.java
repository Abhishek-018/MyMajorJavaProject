package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer>{
	
//	List<Event> findEventByName(String eventName);
	@Query(value = "select * from event_info where organizer_id =?1", nativeQuery=true)
	public List<Event>getByOrganizerId(int id);

}
