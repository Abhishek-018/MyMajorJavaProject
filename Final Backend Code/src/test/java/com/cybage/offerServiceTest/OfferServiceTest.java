package com.cybage.offerServiceTest;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import com.cybage.repository.OfferRepository;
import com.cybage.service.OfferService;

@ExtendWith(MockitoExtension.class)
public class OfferServiceTest {
	@Mock
	private OfferRepository offerRepositary;
	
	@Autowired
	private OfferService offerService;
	
	@BeforeEach
	void setup() {
		this.offerService=new OfferService(this.offerRepositary);
		
	}
	
	@Test
	void getAllOfferTest() {
		offerService.getAllOffer();
		verify(offerRepositary).findAll();
	}

}
