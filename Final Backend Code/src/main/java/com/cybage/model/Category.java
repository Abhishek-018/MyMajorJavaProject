package com.cybage.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
@NoArgsConstructor
@Setter
@Getter
@ToString
*/

@Entity
@Table(name="category_info",uniqueConstraints= {@UniqueConstraint(columnNames="category_id")})
public class Category {
	
	@Id
	@GeneratedValue(strategy= GenerationType. AUTO, generator="native" )
	@Column(name="category_id",unique=true, nullable=false)
	private int categoryId;
	
	@Column(name="category_name",unique=true)
	private String categoryName;
	
	public Category() {
		
		
	}

	@OneToMany(mappedBy="category", cascade = CascadeType.ALL)
	//@OneToMany(mappedBy="categoryName")
	@JsonIgnore
	private List<Event> event;
	
	
	public List<Event> getEvent() {
		return event;
	}

	public void setEvent(List<Event> event) {
		this.event = event;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}



}
