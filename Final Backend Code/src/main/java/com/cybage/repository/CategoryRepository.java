package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
	
//	List<Category> findCategoryByName(String name);
	
//	@Query("From Category where categoryName=?1")
//	List<Category> getByName(String categoryName);
}
