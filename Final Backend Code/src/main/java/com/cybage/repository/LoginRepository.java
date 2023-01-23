package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cybage.model.Registrationdemo;

public interface LoginRepository extends JpaRepository<Registrationdemo, Integer>{
	
	//get all values of user by username
    public Registrationdemo findByEmail(String email);
               
    @Query("SELECT u FROM Registrationdemo u WHERE u.email = :email")
    public  List<Registrationdemo>  getByEmail(@Param("email") String email);
    
     @Query("SELECT u FROM Registrationdemo u WHERE u.email = :email AND u.password=:password")
    public  Registrationdemo getDataForAuthentication(@Param("email") String email, @Param("password") String password); 

}
