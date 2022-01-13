package com.devsuperior.dsmovie.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService service;
	
	/*
	public ScoreController(ScoreService service) {
		this.service = service;
	}
	*/
	
	
	/*
	 * why PUT? because that verb is idempotent
	 * In fact, PUT has the effect of inserting, but because it is idempotent, its insertion does not add like POST, but keeps
	 
	 *The real meaning of put is not just to update, but to save like idempotent.
	 */
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto){
		MovieDTO movieDTO = service.saveScore(dto);
		return movieDTO;
	}
}
