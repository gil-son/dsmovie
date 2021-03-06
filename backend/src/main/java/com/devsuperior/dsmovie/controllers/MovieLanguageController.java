package com.devsuperior.dsmovie.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.devsuperior.dsmovie.dto.MovieLanguageDTO;
import com.devsuperior.dsmovie.entities.MovieLanguage;
import com.devsuperior.dsmovie.repositories.MovieLanguageRepository;

@RestController
@RequestMapping(value = "/movies-languages")
public class MovieLanguageController {

	@Autowired
	MovieLanguageRepository movieLanguageRepository;
	
	
	
	@GetMapping
	public Page<MovieLanguageDTO> findAll(Pageable pageable){
		Page<MovieLanguage> result = movieLanguageRepository.findAll(pageable);
		Page<MovieLanguageDTO> pageDTO = result.map(x -> new MovieLanguageDTO(x));
		return pageDTO;
	}
	
	/*
	@GetMapping
	public ResponseEntity<List<MovieLanguageDTO>> findAll(){
		List<MovieLanguage> list = movieLanguageRepository.findAll();
		
		List<MovieLanguageDTO> listmovieLanguageDTO = new ArrayList<>();
		for(MovieLanguage movieLanguage : list) {
			
			listmovieLanguageDTO.add(new MovieLanguageDTO(movieLanguage));
		}
		
		return ResponseEntity.ok().body(listmovieLanguageDTO);
	}
	*/
	
}
