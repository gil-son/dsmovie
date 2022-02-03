package com.devsuperior.dsmovie.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.FullMovieDTO;
import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.MovieLanguageDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.MovieLanguage;
import com.devsuperior.dsmovie.repositories.FullMovieRepository;
import com.devsuperior.dsmovie.repositories.MovieJoinRepository;
import com.devsuperior.dsmovie.repositories.MovieLanguageRepository;
import com.devsuperior.dsmovie.repositories.MovieRepository;

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
	 
	/*
	@GetMapping
	public Page<String> findAll(Pageable pageable){
		Page<String> result = movieJoinRepository.findAllTitlesPaged(pageable);
		
		return result;
	}
	*/
	
	/*
	@GetMapping
	public Page<String> findAll(Pageable pageable){
		Page<String> result = movieJoinRepository.findAll(pageable);
		
		return result;
	}
	*/
	
	/*
	@GetMapping
	public Page<String> findAll(Pageable pageable){
		Page<String> result = fullmovieRepository.findAll(pageable);
		
		return result;
	}
	*/
	
}
