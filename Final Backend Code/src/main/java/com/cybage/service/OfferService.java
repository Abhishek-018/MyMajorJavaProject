package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Event;
import com.cybage.model.Offer;
import com.cybage.repository.OfferRepository;

@Service
public class OfferService {
	
	@Autowired
	private OfferRepository offerRepository;
	
	public OfferService(OfferRepository offerRepositary) {
		this.offerRepository=offerRepositary;
	}

	//To Add a offer:
	public Offer addOffer(Offer offer)
	{
		return offerRepository.save(offer);	
	}
	
	//To Get All the offers:
	public List<Offer> getAllOffer()
	{
		return offerRepository.findAll();
	}
	
	//To get the offerById:
	public Offer getOfferById(int id)
	{
		
		return offerRepository.findById(id).orElse(null);
	}
	
	
	//To delete a particular offer:
	public void deleteOfferById(int id)
	{
		offerRepository.deleteById(id);	
	}
	
	//To update a particular offer:
	public Offer updateOffer(int id, Offer offer) {
		 
		Offer offer1 = offerRepository.findById(id).get();
		if(offer1.getOfferName()!=null)
			offer1.setOfferName(offer.getOfferName());
		if(offer1.getOfferDescription()!=null)
			offer1.setOfferDescription(offer.getOfferDescription());
	  return offerRepository.save(offer1); 
	  
	}
	
	// To display events according to the organizer id:
	public List<Offer> getByOfferId(int id)
	{
		return offerRepository.getOfferById(id);
	}


}
