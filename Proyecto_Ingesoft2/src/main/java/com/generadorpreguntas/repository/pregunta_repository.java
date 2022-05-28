package com.generadorpreguntas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.generadorpreguntas.model.materia;
import com.generadorpreguntas.model.pregunta;

public interface pregunta_repository extends MongoRepository<pregunta, Integer>{

}
