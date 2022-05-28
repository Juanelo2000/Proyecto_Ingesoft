package com.generadorpreguntas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "preguntas")
public class pregunta {

	private int idMateria;
	private String nomMateria;
	private String enunciado;
    private String retroalimentacion;
    //private String[] respuestas;
    private int corte;
    
	public pregunta(String nomMateria, int idMateria, String enunciado, String retroalimentacion, /*String[] respuestas,, */int corte) {
		super();
		
		
		this.idMateria = idMateria;
		this.nomMateria = nomMateria;
		this.enunciado = enunciado;
		this.retroalimentacion = retroalimentacion;
		//this.respuestas = respuestas;
		this.corte = corte;
	}
	
	
	
	public pregunta() {
	
	}
	
	
	public String getNomMateria() {
		return nomMateria;
	}
	public void setNomMateria(String nomMateria) {
		this.nomMateria = nomMateria;
	}
	public String getEnunciado() {
		return enunciado;
	}
	public void setEnunciado(String enunciado) {
		this.enunciado = enunciado;
	}
	public String getRetroalimentacion() {
		return retroalimentacion;
	}
	public void setRetroalimentacion(String retroalimentacion) {
		this.retroalimentacion = retroalimentacion;
	}
	/*public String[] getRespuestas() {
		return respuestas;
	}
	public void setRespuestas(String[] respuestas) {
		this.respuestas = respuestas;
	}*/
	public int getIdMateria() {
		return idMateria;
	}
	public void setIdMateria(int idMateria) {
		this.idMateria = idMateria;
	}
	public int getCorte() {
		return corte;
	}
	public void setCorte(int corte) {
		this.corte = corte;
	}
    
}
