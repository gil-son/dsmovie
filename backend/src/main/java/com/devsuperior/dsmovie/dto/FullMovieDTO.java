package com.devsuperior.dsmovie.dto;

public class FullMovieDTO {

	private Long id;
	private String title;
	private Double score;
	private Integer count;
	private String image;
	private String titleBrazil;
	private String titleSpanish;
	
	
	public FullMovieDTO(){}


	public FullMovieDTO(Long id, String title, Double score, Integer count, String image, String titleBrazil,
			String titleSpanish) {
		super();
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
		this.titleBrazil = titleBrazil;
		this.titleSpanish = titleSpanish;
	}
	
}
