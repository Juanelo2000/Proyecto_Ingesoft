package com.generadorpreguntas.model;

public class profesor {
	
	private int id;
	private String nombre;
	private String apellido;
	private String telefono;
	private String correo;
	private int[] materias;
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
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public int[] getMaterias() {
		return materias;
	}
	public void setMaterias(int[] materias) {
		this.materias = materias;
	}
	

}
