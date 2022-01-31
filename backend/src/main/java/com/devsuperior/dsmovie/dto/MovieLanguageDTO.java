package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.MovieLanguage;

public class MovieLanguageDTO {

	private Long id;
	private String titleBrazil;
	private String titleSpanish;
	
	public MovieLanguageDTO() {}

	public MovieLanguageDTO(Long id, String titleBrazil, String titleSpanish) {
		this.id = id;
		this.titleBrazil = titleBrazil;
		this.titleSpanish = titleSpanish;
	}


	public MovieLanguageDTO(MovieLanguage movieLanguage) {
		id = movieLanguage.getId();
		titleBrazil = movieLanguage.getTitleBrazil();
		titleSpanish = movieLanguage.getTitleSpanish();
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