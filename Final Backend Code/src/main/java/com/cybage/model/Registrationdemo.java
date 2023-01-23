package com.cybage.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



//Entity and table is not required:
@Entity
@Table(name ="registration2")
public class Registrationdemo {

	@Id
	@GeneratedValue( strategy= GenerationType. AUTO, generator="native" )
	private int registrationId;

	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String role;
	private String contactNumber;
	
	
	@OneToMany(mappedBy="registrationdemo", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> booking;
	
	public List<Offer> getOffer() {
		return offer;
	}

	public void setOffer(List<Offer> offer) {
		this.offer = offer;
	}


	@OneToMany(mappedBy="registrationdemo", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Complaint> complaint;
	
	@OneToMany(mappedBy="registrationdemo", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Event> event;
	
	@OneToMany(mappedBy="organizer", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Offer> offer;
	
	@OneToMany(mappedBy="organizerId", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> bookings;
	
	@OneToMany(mappedBy="organizerId", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Complaint> complaints;
	
	
	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}

	public List<Complaint> getComplaints() {
		return complaints;
	}

	public void setComplaints(List<Complaint> complaints) {
		this.complaints = complaints;
	}

	public List<Event> getEvent() {
		return event;
	}

	public void setEvent(List<Event> event) {
		this.event = event;
	}


	@Column(length = 30)
	private String verifiedCode;
	private Boolean authorize;


	
	public void setAuthorize(Boolean authorize) {
		this.authorize = authorize;
	}
	


	public boolean isAuthorize()
	{
		return authorize;
	}
	
	public void setVerifiedCode(String verifiedCode) {
		this.verifiedCode = verifiedCode;
	}

	public String getVerifiedCode() {
		return verifiedCode;
	}

	public int getRegistrationId() {
		return registrationId;
	}

	public void setRegistrationId(int registrationId) {
		this.registrationId = registrationId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public List<Booking> getBooking() {
		return booking;
	}

	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}

	public Boolean getAuthorize() {
		return authorize;
	}

	
	@Override
	public String toString() {
		return "Registrationdemo [registrationId=" + registrationId + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + ", password=" + password + ", role=" + role + ", contactNumber="
				+ contactNumber + ", booking=" + booking + ", verifiedCode=" + verifiedCode + ", authorize=" + authorize
				+ "]";
	}


	
}