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

import com.cybage.model.Category;
import com.cybage.service.CategoryService;


@CrossOrigin("*")
@RestController
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	//Add Category to the Category Table: 
	@PostMapping("/")
	public ResponseEntity<String> addCategory(@RequestBody Category category)
	{
		Category category1 = categoryService.addCategory(category);
		return new ResponseEntity<String>("Category Added Successfully!",HttpStatus.CREATED);
	}
	
	//Get the List of Categories:
	@GetMapping("/")
	public ResponseEntity<List<Category>> getCategory()
	{
		List<Category> categoryList = categoryService.getCategory();
		return new ResponseEntity<List<Category>>(categoryList,HttpStatus.OK);
	}
	
	//Get Category By Id:
	@GetMapping("/{id}")
	public ResponseEntity<Category> getCategory(@PathVariable int id)
	{
		Category category1 = categoryService.getCategoryById(id);
		return new ResponseEntity<Category>(category1,HttpStatus.OK);
	}
	
	
	//Update Category:
	@PutMapping("/{id}")
	public ResponseEntity<String> updateCategory(@PathVariable int id, @RequestBody Category category)
	{
		categoryService.updateCategory(id, category);
		return new ResponseEntity<String>("Category Updated Successfully",HttpStatus.CREATED);
	}
	
	//Delete Category:
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteCategory(@PathVariable int id)
	{
		categoryService.deleteCategory(id);
		return new ResponseEntity<String>("Category Deleted Successfully!", HttpStatus.CREATED);
	}

}
