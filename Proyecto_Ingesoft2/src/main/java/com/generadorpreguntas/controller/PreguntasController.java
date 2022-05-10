package com.generadorpreguntas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generadorpreguntas.model.materia;
import com.generadorpreguntas.model.pregunta;
import com.generadorpreguntas.repository.materia_repository;
import com.generadorpreguntas.repository.pregunta_repository;
@RestController 
@RequestMapping("/generadorpreguntas")
public class PreguntasController {
	@Autowired
	pregunta_repository listaPreguntas;
	

	
	@GetMapping("/crearpregunta")
	public List<pregunta> buscarPregunta() {
		return listaPreguntas.findAll();
	}
	
	@PostMapping("/Customers")
	public pregunta guardar(@RequestBody pregunta pregunta){
		return listaPreguntas.save(pregunta);
	}
	
	@PostMapping("/CustomersList")
	public List<pregunta> saveListCustomers(@RequestBody List<pregunta> preguntas) {
		return listaPreguntas.saveAll(preguntas);
	}
	
	@PutMapping("/Customers/{id}")
	public pregunta nuevaPregunta(@PathVariable int id, @RequestBody pregunta pregunta) {
		
		pregunta nueva = listaPreguntas.findById(id).get();
		
		nueva.setCorte(pregunta.getCorte());
		nueva.setEnunciado(pregunta.getEnunciado());
		nueva.setIdMateria(pregunta.getIdMateria());
		nueva.setRespuestas(pregunta.getRespuestas());
		nueva.setRetroalimentacion(pregunta.getRetroalimentacion());
		
		
		listaPreguntas.save(nueva);
		
		return nueva;
	}
	
	@DeleteMapping("/Customers/{id}")
	public pregunta eliminarPreguntaById(@PathVariable int id) {
		pregunta pregunta = listaPreguntas.findById(id).get();
		listaPreguntas.deleteById(id);
		return pregunta;
	}
	
	@DeleteMapping("/CustomersList")
	public void deleteAll() {
		listaPreguntas.deleteAll();
	}
}
