package com.cybage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybage.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
