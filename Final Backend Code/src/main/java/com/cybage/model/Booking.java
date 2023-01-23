package com.cybage.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="booking_table")
public class Booking {
	
	@Id
	@GeneratedValue( strategy= GenerationType. AUTO, generator="native" )
	@Column(name="booking_id",unique=true, nullable=false)
	private int bookingId;
	
	@Column(name="booking_status")
	private String status;

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public Registrationdemo getRegistrationdemo() {
		return registrationdemo;
	}

	public void setRegistrationdemo(Registrationdemo registrationdemo) {
		this.registrationdemo = registrationdemo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	@ManyToOne
	@JoinColumn(name="event_id")
	private Event event;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private Registrationdemo registrationdemo;
	

	@ManyToOne
	@JoinColumn(name="organizer_id")
	private Registrationdemo organizerId;

	public Registrationdemo getOrganizerId() {
		return organizerId;
	}

	public void setOrganizerId(Registrationdemo organizerId) {
		this.organizerId = organizerId;
	}
}
