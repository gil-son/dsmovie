package com.devsuperior.dsmovie.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.MovieLanguage;

public interface FullMovieRepository extends JpaRepository<Movie, Long> {	
	
	@Query("SELECT new com.devsuperior.dsmovie.dto.FullMovieDTO(obj.id, obj.title, obj.score, obj.count, obj.image, a.titleBrazil, a.titleSpanish) "
			+ "FROM Movie obj INNER JOIN MovieLanguage a WHERE obj.id = a.id")
	
	Page<Movie> findAll(Pageable pageable);
}
