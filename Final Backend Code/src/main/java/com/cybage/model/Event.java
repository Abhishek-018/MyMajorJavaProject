package com.cybage.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
@NoArgsConstructor
@Getter
@Setter
@ToString
*/

@Entity
@Table(name="event_info",uniqueConstraints = {@UniqueConstraint(columnNames = "event_id")})
public class Event {
	
	@Id
	@GeneratedValue( strategy= GenerationType. AUTO, generator="native" )
	@Column(name="event_id", unique = true, nullable = false)
	private int eventId;
	
	@Column(name="event_name")
	private String eventName;
	
	@Column(name="event_date")
	private Date eventDate;
	
	@Column(name="event_location")
	private String eventLocation;
	
	@Column(name="event_details")
	private String eventDetails;
	
	@Column(name="event_price")
	private int eventPrice;
	
	@ManyToOne
	@JoinColumn(name="category_id")
	private Category category;
	//private Category categoryName;
	
	@ManyToOne
	@JoinColumn(name="offer_id")
	private Offer offer;
	

	//To join organizer id:
	@ManyToOne
	@JoinColumn(name="organizer_id")
	@JsonIgnoreProperties(value= { "event","hibernateLazyInitializer"})
	private Registrationdemo registrationdemo;
	
	public Registrationdemo getRegistrationdemo() {
		return registrationdemo;
	}


	public void setRegistrationdemo(Registrationdemo registrationdemo) {
		this.registrationdemo = registrationdemo;
	}

	@OneToMany(mappedBy="event", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> booking;
	
	@OneToMany(mappedBy="event", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Complaint> complaint;

	public Event() {
	
		
	}


	public Offer getOffer() {
		return offer;
	}


	public void setOffer(Offer offer) {
		this.offer = offer;
	}


	public List<Booking> getBooking() {
		return booking;
	}


	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}


	public void setCategory(Category category) {
		this.category = category;
	}
	
	public Category getCategory() {
		return category;
	}

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public Date getEventDate() {
		return eventDate;
	}

	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}

	public String getEventLocation() {
		return eventLocation;
	}

	public void setEventLocation(String eventLocation) {
		this.eventLocation = eventLocation;
	}

	public String getEventDetails() {
		return eventDetails;
	}

	public void setEventDetails(String eventDetails) {
		this.eventDetails = eventDetails;
	}

	public int getEventPrice() {
		return eventPrice;
	}

	public void setEventPrice(int eventPrice) {
		this.eventPrice = eventPrice;
	}

	

}
