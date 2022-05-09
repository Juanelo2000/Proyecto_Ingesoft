package com.generadorpreguntas.model;

import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "preguntas")
public class pregunta {
	
    private String enunciado;
    private String Retroalimentacion;
    private String[] respuestas;
    private int idMateria;
    private int corte;
    
	public pregunta( String enunciado, String retroalimentacion, String[] respuestas, int idMateria, int corte) {
		super();
		
		this.enunciado = enunciado;
		Retroalimentacion = retroalimentacion;
		this.respuestas = respuestas;
		this.idMateria = idMateria;
		this.corte = corte;
	}
	public pregunta() {
	
	}
	
	public String getEnunciado() {
		return enunciado;
	}
	public void setEnunciado(String enunciado) {
		this.enunciado = enunciado;
	}
	public String getRetroalimentacion() {
		return Retroalimentacion;
	}
	public void setRetroalimentacion(String retroalimentacion) {
		Retroalimentacion = retroalimentacion;
	}
	public String[] getRespuestas() {
		return respuestas;
	}
	public void setRespuestas(String[] respuestas) {
		this.respuestas = respuestas;
	}
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
