package com.devsuperior.dsmovie.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {

	
	private MovieRepository movieRepository;
	
	MovieService(MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}
	
	@Transactional(readOnly = true) // just read = more optimized
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = movieRepository.findAll(pageable);
		Page<MovieDTO> pageDTO = result.map(x -> new MovieDTO(x));
		return pageDTO;
	}
	
	
	@Transactional(readOnly = true) // just read = more optimized
	public MovieDTO findById(Long id) {
		Optional<Movie> result = movieRepository.findById(id);
		
		MovieDTO dto = new MovieDTO(result.get());
		return dto;
	}
}
