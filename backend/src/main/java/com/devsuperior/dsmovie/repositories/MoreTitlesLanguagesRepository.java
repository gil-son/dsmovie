package com.devsuperior.dsmovie.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsmovie.dto.MoreTitlesLanguagesDTO;
import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.MovieLanguage;

public interface MoreTitlesLanguagesRepository extends JpaRepository<Movie, Long> {	
	
	@Query("SELECT new com.devsuperior.dsmovie.dto.MoreTitlesLanguagesDTO(obj.id, obj.title, obj.count, obj.image, obj.score, a.titleBrazil, a.titleSpanish, a.titleJapan) "
			+ "FROM Movie obj JOIN obj.movieLanguage a ON obj.id = a.id")
	
	//              table 1 = Movie = obj                         table 2 = obj.movieLanguage = a
	
	Page<MoreTitlesLanguagesDTO> findAllPaged(Pageable pageable);
}
