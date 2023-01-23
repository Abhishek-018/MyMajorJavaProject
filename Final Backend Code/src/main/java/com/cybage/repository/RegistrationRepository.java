package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cybage.model.Registrationdemo;

public interface RegistrationRepository extends JpaRepository<Registrationdemo, Integer>{
	

	@Query("SELECT u FROM Registrationdemo u WHERE u.email = ?1")
	public Registrationdemo findByEmail(String email);

	@Query("SELECT u FROM Registrationdemo u WHERE u.verifiedCode = ?1")
	public Registrationdemo findByVerifiedCode(String code);
	
	@Query("FROM Registrationdemo where role =?1")
	public Registrationdemo findByRole(String role);
	
	@Query("FROM Registrationdemo where role = 'organizer'")
	public List<Registrationdemo> getOrganizer();
	
	@Query("From Registrationdemo where role = 'User'")
	public List<Registrationdemo> getUser();

	
}
