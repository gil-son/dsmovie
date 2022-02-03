package com.devsuperior.dsmovie.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsmovie.dto.FullMovieDTO;
import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.MovieLanguage;

public interface FullMovieRepository extends JpaRepository<Movie, Long> {	
	
	@Query("SELECT new com.devsuperior.dsmovie.dto.FullMovieDTO(obj.id, obj.title, obj.count, obj.image, obj.score, a.titleBrazil, a.titleSpanish) FROM Movie obj INNER JOIN obj.movieLanguage a")
	
	Page<FullMovieDTO> findAllPaged(Pageable pageable);
}
