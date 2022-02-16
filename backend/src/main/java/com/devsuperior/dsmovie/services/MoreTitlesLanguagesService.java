package com.devsuperior.dsmovie.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmovie.dto.MoreTitlesLanguagesDTO;
import com.devsuperior.dsmovie.repositories.MoreTitlesLanguagesRepository;

@Service
public class MoreTitlesLanguagesService {
	
	private MoreTitlesLanguagesRepository repository;
	
	MoreTitlesLanguagesService(MoreTitlesLanguagesRepository repository) {
		this.repository = repository;
		
	}
	
	
	public Page<MoreTitlesLanguagesDTO> findAll(Pageable pageable){
		Page<MoreTitlesLanguagesDTO> result = repository.findAllPaged(pageable);
		return result;
	}

}
