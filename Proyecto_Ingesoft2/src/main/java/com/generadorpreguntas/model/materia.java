package com.generadorpreguntas.model;

import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "materias")
public class materia {
	@Transient
	public static final String SEQUENCE_NAME = "materia_sequence";	
	
     private int id;
     private String nombre;
     
 

 	public materia(int id, String nombre) {
		super();
		this.id = id;
		this.nombre = nombre;
	}    
          
	public materia() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
     
     
}
