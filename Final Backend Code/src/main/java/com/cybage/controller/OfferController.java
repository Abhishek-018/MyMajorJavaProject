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

import com.cybage.model.Event;
import com.cybage.model.Offer;
import com.cybage.service.OfferService;

@CrossOrigin("*")
@RestController
@RequestMapping("/offer")
public class OfferController {
	
	@Autowired
	private OfferService offerService;
	
	
	@PostMapping("/")
	public ResponseEntity<String> addOffer(@RequestBody Offer offer)
	{
		Offer offer1 = offerService.addOffer(offer);
		return new ResponseEntity<String>("Offer added sucessfully",HttpStatus.CREATED);
	}
	
	
	@GetMapping("/")
	public ResponseEntity<List<Offer>> getAllOffer()
	{
		
		List<Offer> offerList=offerService.getAllOffer();
		return new ResponseEntity <List<Offer>> (offerList,HttpStatus.OK);
	}
	
	//Get Category By Id:
	@GetMapping("/{id}")
	public ResponseEntity<Offer> getOfferById(@PathVariable int id)
	{
		Offer offer1 = offerService.getOfferById(id);
		return new ResponseEntity<Offer>(offer1,HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateOffer(@PathVariable int id,@RequestBody Offer offer) //
	   { 
		offerService.updateOffer(id, offer); 
		return new ResponseEntity<String>("Offer updated Successfully", HttpStatus.OK); 
	 }
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteOffer(@PathVariable int id) {

		offerService.deleteOfferById(id);
		return new ResponseEntity<String>("Offer deleted Successfully", HttpStatus.OK);
	}
	
	//To Get Offer According to the Id:
	@GetMapping("/getOfferById/{id}")
	public ResponseEntity<List<Offer>> getOfferByOrganizerId(@PathVariable int id)
	{
		List<Offer> offerList = offerService.getByOfferId(id);
		return new ResponseEntity<List<Offer>>(offerList, HttpStatus.OK);
	}

}
