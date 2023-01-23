package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.model.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Integer>{
	
	@Query(value = "select * from offer_table where organizer_id= ?1", nativeQuery=true)
	public List<Offer> getOfferById(int id);

}
