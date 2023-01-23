package com.cybage.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="complaint_table",uniqueConstraints= {@UniqueConstraint(columnNames="complaint_id")})
public class Complaint {
	
	@Id
	@GeneratedValue(strategy= GenerationType. AUTO, generator="native" )
	@Column(name="complaint_id",unique=true, nullable=false)
	private int complaintId;
	
	@Column(name="complaint_description")
	private String complaintDescription; 
	
	@Column(name="complaint_approval")
	private String approval;
	
	@ManyToOne
	@JoinColumn(name="eventId")
	private Event event;
	
	@ManyToOne
	@JoinColumn(name="registration_id")
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

	public int getComplaintId() {
		return complaintId;
	}

	public Registrationdemo getRegistrationdemo() {
		return registrationdemo;
	}

	public void setRegistrationdemo(Registrationdemo registrationdemo) {
		this.registrationdemo = registrationdemo;
	}

	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}

	public String getComplaintDescription() {
		return complaintDescription;
	}

	public void setComplaintDescription(String complaintDescription) {
		this.complaintDescription = complaintDescription;
	}

	public String getApproval() {
		return approval;
	}

	public void setApproval(String approval) {
		this.approval = approval;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	

}
