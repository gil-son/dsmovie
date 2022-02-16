package com.devsuperior.dsmovie.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.devsuperior.dsmovie.dto.MoreTitlesLanguagesDTO;
import com.devsuperior.dsmovie.services.MoreTitlesLanguagesService;


@RestController
@RequestMapping(value = "/full-movies-titles")
public class MoreTitlesLanguagesController {
	
	@Autowired
	MoreTitlesLanguagesService service;
	
	
	
	@GetMapping
	public Page<MoreTitlesLanguagesDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
}
