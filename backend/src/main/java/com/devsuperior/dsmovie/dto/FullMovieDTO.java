package com.devsuperior.dsmovie.dto;

public class FullMovieDTO {

	private Long id;
	private String title;
	private Integer count;
	private String image;
	private Double score;
	private String titleBrazil;
	private String titleSpanish;
	
	
	public FullMovieDTO(){}


	public FullMovieDTO(Long id, String title, Integer count, String image, Double score, String titleBrazil,
			String titleSpanish) {
		super();
		this.id = id;
		this.title = title;
		this.count = count;
		this.image = image;
		this.score = score;
		this.titleBrazil = titleBrazil;
		this.titleSpanish = titleSpanish;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Integer getCount() {
		return count;
	}


	public void setCount(Integer count) {
		this.count = count;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public Double getScore() {
		return score;
	}


	public void setScore(Double score) {
		this.score = score;
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
