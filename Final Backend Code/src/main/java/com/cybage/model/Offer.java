package com.cybage.model;

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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="offer_table")
public class Offer{
	
	public Registrationdemo getOrganizer() {
		return organizer;
	}

	public void setOrganizer(Registrationdemo organizer) {
		this.organizer = organizer;
	}

	@Id
	@GeneratedValue( strategy= GenerationType. AUTO, generator="native" )
	@Column(name="offer_id", unique = true, nullable = false)
	private int offerId;
	
	@Column(name="offer_name")
	private String offerName;
	
	@Column(name="offer_description")
	private String offerDescription;
	
	@OneToMany(mappedBy="offer", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Event> event;
	
	@ManyToOne
	@JoinColumn(name="organizer_id")
	private Registrationdemo organizer;
	
	public List<Event> getEvent() {
		return event;
	}

	public void setEvent(List<Event> event) {
		this.event = event;
	}

	public String getOfferDescription() {
		return offerDescription;
	}

	public void setOfferDescription(String offerDescription) {
		this.offerDescription = offerDescription;
	}

	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}

	public String getOfferName() {
		return offerName;
	}

	public void setOfferName(String offerName) {
		this.offerName = offerName;
	}
	
	
	

}
