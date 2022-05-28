package com.generadorpreguntas.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.generadorpreguntas.model.pregunta;

public interface preguntaRepository extends MongoRepository<pregunta, Integer> {
	
	@Query("{ 'nomMateria' : ?0 }")
	List<pregunta> buscarMateria(String nomMateria);
	
	@Query("{ 'nomMateria' : 'Calculo' }")
	List<pregunta> buscarMateriaCalc();
	
	
/*
	@Query(value="{ 'cards.debit' : 'visa' }", fields="{'transactions' : 1, 'cards' : 1, '_id' : 0}")
	List<Customer> findCustomersQ5();*/
	
	
}
