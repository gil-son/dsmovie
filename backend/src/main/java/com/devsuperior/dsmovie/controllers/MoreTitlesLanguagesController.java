package com.devsuperior.dsmovie.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.FullMovieDTO;
import com.devsuperior.dsmovie.repositories.FullMovieRepository;


@RestController
@RequestMapping(value = "/full-movies-titles")
public class FullMovieController {

	@Autowired
	FullMovieRepository fullMovieRepository;
	
	
	@GetMapping
	public Page<FullMovieDTO> findAll(Pageable pageable){
		Page<FullMovieDTO> result = fullMovieRepository.findAllPaged(pageable);
		return result;
	}
	
}
