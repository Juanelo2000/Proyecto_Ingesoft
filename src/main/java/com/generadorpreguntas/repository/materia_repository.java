package com.generadorpreguntas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.generadorpreguntas.model.materia;

public interface materia_repository extends MongoRepository<materia, Integer>{

}
