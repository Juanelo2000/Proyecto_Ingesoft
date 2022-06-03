package com.generadorpreguntas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "preguntas")
public class pregunta {
	@Transient
	public static final String SEQUENCE_NAME = "despa_sequence";
	private int id;
	private String materia;
	private String titulo;                //::titulo::
	private String descripcion;              //descripcion
	private String retroalimentacion;     //#
    private String[] respuestas;
    private int corte;
    private boolean select;
	public pregunta(String materia, String titulo, String descripcion, String retroalimentacion, String[] respuestas,
			int corte, boolean select) {
		super();
		this.materia = materia;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.retroalimentacion = retroalimentacion;
		this.respuestas = respuestas;
		this.corte = corte;
		this.select = select;
	}
	public pregunta() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMateria() {
		return materia;
	}
	public void setMateria(String materia) {
		this.materia = materia;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getRetroalimentacion() {
		return retroalimentacion;
	}
	public void setRetroalimentacion(String retroalimentacion) {
		this.retroalimentacion = retroalimentacion;
	}
	public String[] getRespuestas() {
		return respuestas;
	}
	public void setRespuestas(String[] respuestas) {
		this.respuestas = respuestas;
	}
	public int getCorte() {
		return corte;
	}
	public void setCorte(int corte) {
		this.corte = corte;
	}
	public boolean isSelect() {
		return select;
	}
	public void setSelect(boolean select) {
		this.select = select;
	}
    
	
    

}
