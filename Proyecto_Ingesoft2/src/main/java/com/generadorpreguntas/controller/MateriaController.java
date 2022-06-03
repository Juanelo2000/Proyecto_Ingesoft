package com.generadorpreguntas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generadorpreguntas.model.materia;
import com.generadorpreguntas.repository.materia_repository;
import com.generadorpreguntas.service.SequenceGeneratorService;

@RestController 
@RequestMapping("/generadorpreguntas")
@CrossOrigin(origins = "http://localhost:4200")
public class MateriaController {
	
	
	@Autowired
	materia_repository materiarepository;
	@Autowired
	SequenceGeneratorService service;
	@GetMapping("/listaMaterias") //Mostrar todos los registros
	public List<materia> buscarPregunta() {
		return materiarepository.findAll();
	}
	
	
	@PostMapping("/guardarMateria") //Guardar 1
	public materia guardar(@RequestBody materia materia){
		materia.setId(service.getSequenceNumber(materia.SEQUENCE_NAME));
		return materiarepository.save(materia);
	}
	
	

}
