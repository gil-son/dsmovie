package com.devsuperior.dsmovie.entities;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "tb_movie_language")
public class MovieLanguage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titleBrazil;
	private String titleSpanish;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "movie_id")
    @JsonBackReference
	private Movie movie;
	
	public MovieLanguage(){}


	public MovieLanguage(Long id, String titleBrazil, String titleSpanish) {
		this.id = id;
		this.titleBrazil = titleBrazil;
		this.titleSpanish = titleSpanish;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitleBrazil() {
		return titleBrazil;
	}


	public void setTitleBrazil(String titleBrazil) {
		this.titleBrazil = titleBrazil;
	}


	public String getTitleSpanish() {
		return titleSpanish;
	}


	public void setTitleSpanish(String titleSpanish) {
		this.titleSpanish = titleSpanish;
	}
	
}
