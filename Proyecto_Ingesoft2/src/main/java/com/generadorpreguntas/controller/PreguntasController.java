package com.generadorpreguntas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:4200")
public class PreguntasController {
	
	@Autowired
	pregunta_repository preguntarepository;
	
	@GetMapping("/listaPreguntas") //Mostrar todos los registros
	public List<pregunta> buscarPregunta() {
		return preguntarepository.findAll();
	}
	
	@PostMapping("/guardarPregunta") //Guardar 1
	public pregunta guardar(@RequestBody pregunta pregunta){
		return preguntarepository.save(pregunta);
	}
	
	@PostMapping("/CustomersList") //Guardar varios
	public List<pregunta> saveListCustomers(@RequestBody List<pregunta> preguntas) {
		return preguntarepository.saveAll(preguntas);
	}
	
	@PutMapping("/modificarPregunta/{id}") //Modificar
	public pregunta nuevaPregunta(@PathVariable int id, @RequestBody pregunta pregunta) {
		
		pregunta nueva = preguntarepository.findById(id).get();
		
		nueva.setTitulo(pregunta.getTitulo());
		nueva.setDescripcion(pregunta.getDescripcion());
		nueva.setCorte(pregunta.getCorte());
		nueva.setMateria(pregunta.getMateria());
		nueva.setRespuestas(pregunta.getRespuestas());
		nueva.setRetroalimentacion(pregunta.getRetroalimentacion());
		
		
		
		preguntarepository.save(nueva);
		
		return nueva;
	}
	
	@DeleteMapping("/borrarPregunta/{id}")
	public pregunta eliminarPreguntaById(@PathVariable int id) {
		pregunta pregunta = preguntarepository.findById(id).get();
		preguntarepository.deleteById(id);
		return pregunta;
	}
	
	@DeleteMapping("/DelAll")
	public void deleteAll() {
		preguntarepository.deleteAll();
	}
	
	//FILTRO
	
		//Query
	/*
		@GetMapping("/buscarMateria/{nomMateria}")
		public List<pregunta> buscarMateria(@PathVariable String nomMateria){
			return preguntarepository.buscarMateria(nomMateria);
		}
	
		@GetMapping("/buscarMateriaCalc")
		public List<pregunta> buscarMateriaCalc(){
			return preguntarepository.buscarMateriaCalc();
		}
		*/
		//Query
		
		/*
		//Query
		@GetMapping("/CustomersQ4")
		public List<Customer> findCustomers4(){
			return customerRepository.findCustomersQ4();
		}

		//Query
		@GetMapping("/CustomersQ5")
		public List<Customer> findCustomers5(){
			return customerRepository.findCustomersQ5();
		}*/
}
