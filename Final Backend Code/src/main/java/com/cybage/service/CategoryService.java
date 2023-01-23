package com.cybage.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Category;
import com.cybage.repository.CategoryRepository;

@Service
public class CategoryService {
	
	Logger logger=LoggerFactory.getLogger(CategoryService.class);
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	//Can Add Category:
	public Category addCategory(Category category)
	{
		logger.info("Category Added Logger");
		return categoryRepository.save(category);
	}
	
	//To get the List of Category:
	public List<Category> getCategory()
	{
		logger.info("Category List Fetched Logger");
		return categoryRepository.findAll();
	}
	
	//To get the Category according to the Id:
	public Category getCategoryById(int id)
	{
		logger.info("Category By Id Fetched Logger");
		return categoryRepository.findById(id).orElse(null);
	
	}
	
	//To delete a particular Category:
	public void deleteCategory(int id)
	{
		logger.info("Category Deleted Logger");
		categoryRepository.deleteById(id);
	}
	
	//To update a particular Category:
	public Category updateCategory(int id, Category category)
	{
		Category category1 = categoryRepository.findById(id).get();
		if(category.getCategoryName()!=null)
		{
			category1.setCategoryName(category.getCategoryName());
			
		}
		logger.info("Category Updated Logger");
		return categoryRepository.save(category1);
		
	}
	
	


}
