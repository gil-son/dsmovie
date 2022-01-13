package com.devsuperior.dsmovie.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	/*
	 * This method says what will be done according to the CamelCase writing pattern and Spring JPA understands and creates its functionality
	 
	 *click with CTRL + SHIFT + O in JpaRepository
	 *
	 *https://www.youtube.com/watch?v=jh_T5_o3qKE   (28:34)
	 *https://www.baeldung.com/spring-data-repositories
	 */
	
	User findByEmail(String email);
}
